import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/');
});

const searchValue = 'the';

test.describe('Search form', () => {
  test('Search input has no value when loaded', async ({ page }) => {
    const searchbox = page.getByRole('searchbox');

    await expect(searchbox).toBeEmpty();
  });
});

test.describe('Search form', () => {
  test('Search input can contain a value', async ({ page }) => {
    const searchbox = page.getByRole('searchbox');

    await searchbox.fill(searchValue);

    await expect(searchbox).toHaveValue(searchValue);
  });
});

test.describe('Search form', () => {
  test('Input value remains after button click', async ({ page }) => {
    const searchbox = page.getByRole('searchbox');
    const button = page.getByText(/search/i);

    await searchbox.fill(searchValue);
    await button.click();

    await expect(searchbox).toHaveValue(searchValue);
  });
});

test.describe('Amount of found movies', () => {
  test('Found movie counter is more than 0', async ({ page }) => {
    const searchbox = page.getByRole('searchbox');
    const button = page.getByText(/search/i);

    await searchbox.fill(searchValue);
    await button.click();

    const movieCounter = await page
      .getByText(/(\d+ movies found)/i)
      .innerHTML();
    const movieCount = +movieCounter.replace(/[^0-9]/g, '');

    expect(movieCount).toBeGreaterThan(0);
  });
});

test.describe('Search results', () => {
  test('Search result is not empty', async ({ page }) => {
    const searchbox = page.getByRole('searchbox');
    const button = page.getByText(/search/i);

    await searchbox.fill(searchValue);
    await button.click();

    const movies = await page.getByRole('link').allInnerTexts();
    expect(movies.length).toBeGreaterThan(0);
  });
});

test.describe('Found movies', () => {
  test('All titles of search result contain the search value', async ({
    page,
  }) => {
    const searchbox = page.getByRole('searchbox');
    const button = page.getByText(/search/i);

    await searchbox.fill(searchValue);
    await button.click();

    const movies = await page.locator('card').allInnerTexts();
    const searchValueInTitles = movies.map((movie) =>
      movie.toLowerCase().includes(searchValue)
    );

    expect(searchValueInTitles).not.toContain(false);
  });
});

test.describe('Movie page', () => {
  test('Movie title contains the search value on movie page', async ({
    page,
  }) => {
    const searchbox = page.getByRole('searchbox');
    const button = page.getByText(/search/i);

    await searchbox.fill(searchValue);
    await button.click();

    const movies = await page.locator('.card').all();
    const movie = movies[0];
    await movie.click();

    const movieTitle = page.locator('.movie-info-title');

    expect(await movieTitle.innerHTML()).toContain(searchValue);
  });
});
