import { useState, ReactNode } from 'react';

interface props {
  title: string;
  children: ReactNode;
  isActive: boolean;
  onShow: () => void;
}

function Child({ title, children, isActive, onShow }:props) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          Show
        </button>
      )}
    </section>
  );
}

export default function Parent() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div style={{background: "lightblue"}}>
      <h2>Lifting State Up  !!!!</h2>
      <Child
        title="Child1"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        His name is mani !!!!!!!!!
      </Child>
      <Child
        title="Child2"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        His name is hari !!!!!!!!!
      </Child>
    </div>
  );
}
