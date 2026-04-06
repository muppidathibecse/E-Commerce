import { useState } from "react";
import { getData, createData, updateData, deleteData } from "./services";

const JsonLearn = () => {
  const [tableData, setDableData] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const fetchData = async () => {
    const response = await getData();
    setDableData(response);
    console.log("GET:", tableData);
  };

  const addData = async () => {
    const newPost = {
      title: "New Post",
      description: "This is a new post",
    };

    const res = await createData(newPost);
    console.log("POST:", res);
    fetchData();
  };

  const updatePost = async () => {
    try {
      const res = await updateData(selectedId, formData);
      console.log("PUT:", res);
      fetchData();
      setIsEdit(false);
    } catch (err) {
      console.log(err);
    }
  };

  const removeData = async (id: string) => {
    const res = await deleteData(id);
    console.log("DELETE:", res);
    fetchData();
  };

  const handleEdit = (item: any) => {
    setSelectedId(item.id);
    setFormData({
      title: item.title,
      description: item.description,
    });
    setIsEdit(true);
  };
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <button
        style={{
          padding: "8px 20px",
          backgroundColor: "#06202b",
          color: "white",
          border: "none",
          borderRadius: "7px",
          cursor: "pointer",
        }}
        onClick={fetchData}
      >
        Get Data
      </button>
      <button
        style={{
          padding: "8px 20px",
          backgroundColor: "#06202b",
          color: "white",
          border: "none",
          borderRadius: "7px",
          marginLeft: "10px",
          cursor: "pointer",
        }}
        onClick={addData}
      >
        Add Data
      </button>

      <table
        style={{
          border: "1px solid black",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "5px 20px" }}>
              Id
            </th>
            <th style={{ border: "1px solid black", padding: "5px 20px" }}>
              Title
            </th>
            <th style={{ border: "1px solid black", padding: "5px 20px" }}>
              Description
            </th>
            <th style={{ border: "1px solid black", padding: "5px 20px" }}>
              Edit
            </th>
            <th style={{ border: "1px solid black", padding: "5px 20px" }}>
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item: any, index: number) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "5px 20px" }}>
                {item.id}
              </td>
              <td style={{ border: "1px solid black", padding: "5px 20px" }}>
                {item.title}
              </td>
              <td style={{ border: "1px solid black", padding: "5px 20px" }}>
                {item.description}
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  padding: "5px 20px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    padding: "3px 10px",
                    backgroundColor: "#06202b",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
              </td>
              <td
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  padding: "5px 20px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    padding: "3px 10px",
                    backgroundColor: "#06202b",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => removeData(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEdit && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "265px",
              gap: "10px",
              border: "1px solid black",
              padding: "10px 20px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Title"
              style={{ padding: "5px 10px", borderRadius: "8px" }}
            />

            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              style={{ padding: "5px 10px", borderRadius: "8px" }}
            />

            <button
              style={{
                padding: "8px 20px",
                backgroundColor: "#06202b",
                color: "white",
                border: "none",
                borderRadius: "7px",
                cursor: "pointer",
              }}
              onClick={updatePost}
            >
              Save
            </button>

            <button
              style={{
                padding: "8px 20px",
                backgroundColor: "#06202b",
                color: "white",
                border: "none",
                borderRadius: "7px",
                cursor: "pointer",
              }}
              onClick={() => setIsEdit(false)}
            >
              Cancel
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default JsonLearn;
