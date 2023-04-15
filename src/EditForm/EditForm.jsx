import Button from "../Button/Button";

export default function EditForm() {
    return (
        <form>
            <div>
                <p>title</p>
                <input placeholder="Select Title" />
            </div>
            <div>
                <p>release date</p>
                <input type="date" placeholder="Select Date" />
            </div>
            <div>
                <p>movie url</p>
                <input placeholder="https://" />
            </div>
            <div>
                <p>rating</p>
                <input placeholder="7.8" />
            </div>
            <div>
                <p>genre</p>
                <select>
                    <option value="">Select Genre</option>
                    <option value="documentary">Documentary</option>
                    <option value="comedy">Comedy</option>
                    <option value="horror">Horror</option>
                    <option value="crime">Crime</option>
                    <option value="drama">Drama</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="mystery">Mystery</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                </select>
            </div>
            <div>
                <p>runtime</p>
                <input placeholder="minutes" />
            </div>
            <div>
                <p>overview</p>
                <textarea placeholder="Movie description" />
            </div>
            <div>
                <Button className="cancel">reset</Button>
                <Button className="confirm">submit</Button>
            </div>
        </form>
    );
}