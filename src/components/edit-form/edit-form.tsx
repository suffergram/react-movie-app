import Button from '../button/button';
import { genres } from '../main/info';

import './style.css';

export default function EditForm() {
  return (
    <form className="modal-edit-form">
      <label>
        title
        <input placeholder="Select Title" />
      </label>
      <label>
        release date
        <input type="date" placeholder="Select Date" />
      </label>
      <label>
        movie url
        <input placeholder="https://" />
      </label>
      <label>
        rating
        <input placeholder="7.8" />
      </label>
      <label>
        genre
        <select>
          <option value="">Select Genre</option>
          {genres.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        runtime
        <input placeholder="minutes" />
      </label>
      <label>
        overview
        <textarea placeholder="Movie description" />
      </label>
      <div>
        <Button className="cancel modal-edit-button">reset</Button>
        <Button className="confirm modal-edit-button">submit</Button>
      </div>
    </form>
  );
}
