import { useContext } from "react";
import { createContext, useState } from "react";

const AccordionContext = createContext();

// custom hook
export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>."
    );
  }
  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState(null);

  function openItem(id) {
    setOpenItemId(id);
  }

  function closeItem() {
    setOpenItemId(null);
  }

  const contextValue = {
    openItemId: openItemId,
    openItem,
    closeItem,
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}
