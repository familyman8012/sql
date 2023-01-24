import { useState } from "react";
import "./update.scss";
import { makeRequest } from "../../axios";

function Update({ setopenUpdate }) {
  const [cover, setCover] = useState(null);
  const [Profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: "",
    city: "",
    website: "",
  });

  const upload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  return (
    <div className="update">
      Update
      <form>
        <input type="file" />
        <input type="file" />
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="city" onChange={handleChange} />
        <input type="text" name="website" onChange={handleChange} />
        <button>Update</button>
      </form>
      <button onClick={() => setopenUpdate(false)}>X</button>
    </div>
  );
}

export default Update;
