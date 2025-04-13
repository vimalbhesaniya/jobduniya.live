import Cookies from "js-cookie";
import React, { useCallback, useContext } from "react";
import { EnableSpinner } from "../..";
import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const useAPI = () => {
  const [setSpinnerState] = useContext(EnableSpinner);
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const token = Cookies.get("token");

  const usePostREQUEST = ({ PATH, BODY, HEADER, onSuccess, onError }) => {
    return useMutation({
      mutationFn: async (body) => {
        const { data } = await axios.post(
          `${process.env.REACT_APP_LOCAL_URL}${PATH}`,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
              ...HEADER,
            },
          }
        );
        return data;
      },
      onSuccess: (data) => onSuccess(data),
      onError: (error) => onError(error),
    });
  };

  const getREQUEST = useCallback(
    async (PATH, BODY, HEADER) => {
      if (
        PATH.split("/")[0] != "fetchfetchAppliedJobs" &&
        PATH.split("/")[0] != "ListJob"
      ) {
        setSpinnerState(true);
      }
      try {
        const RESPONSE = await fetch(
          `${process.env.REACT_APP_LOCAL_URL}${PATH}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: Cookies.get("token"),
            },
            body: BODY,
            method: "GET",
          }
        );
        const data = await RESPONSE.json();
        if (data) {
          setSpinnerState(false);
        }
        setData(data);
        return data;
      } catch (error) {
        setSpinnerState(false);
        setError(error);
        return error;
      }
    },
    [data, error, loading]
  );

  const useGetRequest = ({ key = [], PATH, enabled, initialData }) => {
    return useQuery({
      queryKey: key,
      queryFn: async () => {
        const { data } = await axios.get(
          `${process.env.REACT_APP_LOCAL_URL}${PATH}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: Cookies.get("token"),
            },
          }
        );
        return data.data;
      },
      enabled,
      initialData,
    });
  };

  const usePatchREQUEST = ({ PATH, onError, onSuccess, HEADER }) => {
    return useMutation({
      mutationFn: async (body) => {
        const { data } = await axios.patch(
          `${process.env.REACT_APP_LOCAL_URL}${PATH}`,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: token,
              ...HEADER,
            },
          }
        );
        return data;
      },
      onSuccess: (data) => onSuccess && onSuccess(data),
      onError: (error) => onError && onError(error),
    });
  };

  const deleteREQUEST = useCallback(
    async (PATH, COLLECTION_NAME, WHERE) => {
      try {
        const RESPONSE = await fetch(
          `${process.env.REACT_APP_LOCAL_URL}${PATH}`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: Cookies.get("token"),
            },
            method: "DELETE",
            body: JSON.stringify({
              COLLECTION_NAME,
              WHERE,
            }),
          }
        );
        const data = await RESPONSE.json();
        setData(data);
        return data;
      } catch (error) {
        setSpinnerState(false);
        setError(error);
        return error;
      }
    },
    [data, error, loading]
  );

  return {
    usePostREQUEST,
    getREQUEST,
    deleteREQUEST,
    usePatchREQUEST,
    useGetRequest,
  };
};

export default useAPI;

// const response = await fetch("http://localhost:5500/login", {
//                     body: JSON.stringify({ email, password }),
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                 })
