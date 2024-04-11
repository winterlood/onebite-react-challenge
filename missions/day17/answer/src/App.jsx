import { createContext, useMemo, useReducer } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useRef } from "react";
import { useCallback } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "REMOVE":
      return state.filter((it) => it.id !== action.targetId);
    default:
      return state;
  }
};

/* 
1. Context 객체 생성
  - ContactStateContext : contacts State를 보관하고 공급함
  - ContactDispatchContext : onCreateContact, onRemoveContact 등의 contacts State를 변경시키는 함수들을 보관하고 공급함
*/
export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreateContact = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name,
        contact,
      },
    });
  }, []);

  const onRemoveContact = useCallback((targetId) => {
    dispatch({
      type: "REMOVE",
      targetId,
    });
  }, []);

  /* 2. useMemo를 사용해 onCreateContact와 onRemoveContact 함수를 묶은 객체가 다시 생성되지 않도록 설정함 */
  const memoizedDispatches = useMemo(
    () => ({ onCreateContact, onRemoveContact }),
    []
  );

  return (
    <div className="App">
      {/* 3. contact State 공급을 위해 Context.Provider 설정 */}
      <ContactStateContext.Provider value={contacts}>
        {/* 4. onCreateContact, onRemoveContact 공급을 위해 Context.Provider 설정 */}
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <h2>Contact List</h2>
          <section>
            {/* 5. 이제는 Context를 통해 데이터를 공급받을 것 이므로 Props는 제거 */}
            <ContactEditor />
          </section>
          <section>
            {/* 5. 이제는 Context를 통해 데이터를 공급받을 것 이므로 Props는 제거 */}
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
