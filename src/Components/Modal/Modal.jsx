import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useArticle from "../../Hooks/useArticle";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modals = ({ open, handleClose, article }) => {
  const axiosPublic = useAxiosPublic();
  //   const { articles } = useArticle

  //   console.log("article", article);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;
    console.log(message);

    const data = {
      article_id: article._id,
      decline_message: message,
      email: article?.email,
    };

    console.log(data);
    axiosPublic.post("/declines", data).then((res) => {
      if (res.data.insertedId) {
        toast.success("FeedBack Successfully Added");
      }
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="font-semibold mb-2">Feedback</h1>
          <button onClick={()=> handleClose()} className="absolute text-2xl font-bold right-3 text-red-400 top-1">X</button>
          <form onSubmit={handleSubmit}>
            <textarea
              className="border-2 border-black w-full"
              name="message"
              id=""
              cols="30"
              rows="5"
            ></textarea>

            <button
              type="submit"
              className="bg-black px-6 py-2 rounded-md text-white mt-2"
            >
              Submit
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Modals;
