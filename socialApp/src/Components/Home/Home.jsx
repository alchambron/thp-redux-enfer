import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoged } from "../../Store/action";


export default function Home() {

  useDispatch(userLoged)
  // const data = useSelector(state => state.username)

  return (
    <>
      <div className="input_text">
        <form action="submit">
          <input type="text" name="" id="tweet" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
