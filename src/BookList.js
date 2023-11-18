import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function ProtectedRoute({ children }) {
  const { user } = useUserAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });
  return children;
}
function BookList() {
  //we want to move the following code to protected route component so that we can wrap our booklist rendering with protectedroute component to protect our page from unloged user
  // const { user } = useUserAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // });
  //step 1: create a ProtectedRoute component with the previous code
  //step 2: Wraping every rending with ProtectedRoute
  // Thinking: since ProtectedRoute is always the topest layer of each component hich need to protect
  // why not wraping the whole component with ProtectedRoute in Route list

  const navigate = useNavigate();
  return (
    <ProtectedRoute>
      <h1>fetch booklist from firestore</h1>
      <table>
        <tr>
          <th colSpan={2}>Book List</th>
        </tr>
        <tbody>
          <tr>
            <td>book1</td>
            <td>
              <button
                onClick={() => {
                  navigate("/book/book1");
                }}
              >
                Show content
              </button>
            </td>
          </tr>
          <tr>
            <td>book2</td>
            <td>
              <button
                onClick={() => {
                  navigate("/book/book2");
                }}
              >
                Show content
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </ProtectedRoute>
  );
}
export default BookList;
