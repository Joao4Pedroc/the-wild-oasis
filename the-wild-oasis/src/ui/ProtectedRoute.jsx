import { styled } from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
/* eslint-disable react/prop-types */

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // load auth user
  const { isLoading, isAuthenticated } = useUser();

  // if no auth > redirect to /login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // show spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  // if auth > render app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
