import { useState } from "react";
import axios from "axios";

export const usePost = () => {
  const [statePost, setStatePost] = useState({
    responsePost: null,
    loadingPost: false,
    errorPost: null,
  });

  const postData = async ({ url, body }) => {
    setStatePost({
      responsePost: null,
      loadingPost: true,
      errorPost: null,
    });
    try {
      const { data } = await axios.post(url, body);

      setStatePost({
        responsePost: data,
        loadingPost: false,
        errorPost: null,
      });
    } catch (error) {
      const errorMessage = error.response?.data.message ?? error.message;
      console.error(errorMessage);

      setStatePost({
        responsePost: null,
        loadingPost: false,
        errorPost: errorMessage,
      });
    }
  };

  return {
    ...statePost,
    postData,
  };
};
