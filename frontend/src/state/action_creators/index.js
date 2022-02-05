import React from "react";

export const fetchUser = user => {
    return dispatch => {
        dispatch({
            type: "FETCH_USER",
            payload: user
        })
    }
}