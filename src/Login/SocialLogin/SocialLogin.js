import React from "react";
import { Button } from "react-bootstrap";
import google from "../../images/google.png";
import github from "../../images/github-sign.png";
import facebook from "../../images/facebook.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  const [signInWithGithub, user1] = useSignInWithGithub(auth);
  const handleGitHubLogin = () => {
    signInWithGithub();
  };

  let handleError;
  if (error) {
    handleError = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {handleError}
      <div className="d-flex justify-content-between">
        <Button
          onClick={() => handleGoogleLogin()}
          className="d-flex  align-items-center bg-black"
        >
          <img src={google} width="25px" height="25px" alt="" />
          <p className="mt-3">Continue With Google</p>
        </Button>
        <Button
          onClick={() => handleGitHubLogin()}
          className="d-flex  align-items-center bg-secondary"
        >
          <img src={github} width="25px" height="25px" alt="" />
          <p className="mt-3 ">Continue With GitHub</p>
        </Button>
        <Button className="d-flex  align-items-center bg-black">
          <img src={facebook} width="25px" height="25px" alt="" />
          <p className="mt-3 ">Continue With Facebook</p>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
