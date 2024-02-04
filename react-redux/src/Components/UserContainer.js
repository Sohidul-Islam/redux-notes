import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Redux";

function UserContainer() {
  const user = useSelector((state) => state.user);
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(fetchUsers());
  }, []);

  return (
    <div
      style={{
        margin: "10px",
        border: "1px solid #eeee",
        borderRadius: "12px",
        padding: "14px",
      }}
    >
      <h1>User data</h1>
      {user?.loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {user?.users?.length > 0 ? (
            <div>
              {user?.users?.map((data, index) => (
                <h3
                  style={{
                    margin: "10px",
                    border: "1px solid #eeee",
                    borderRadius: "12px",
                    padding: "14px",
                  }}
                  key={index}
                >
                  {data?.id} {data?.name}
                </h3>
              ))}
            </div>
          ) : (
            <h3>Data not found</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default UserContainer;
