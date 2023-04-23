import Button from "../Button/Button";
import { genres } from "../Main/info.js";
import "./style.css";

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
                    {
                        genres.map(item => 
                            <option key={item.id} value={item.name}>{item.name}</option>    
                        )
                    }
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