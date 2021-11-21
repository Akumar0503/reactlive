import  React  from "react";
import  Head  from "./component/Head";
import NavClass from "./component/NavClass";
import PageBody from "./component/PageBody";
import Footer from "./component/Footer";

function App() {
  return (
   <div className="maincontent">
    <Head />
    <NavClass/>
    <PageBody name="head1" imgUrl ="https://picsum.photos/200" para ="para1 text" />
    <PageBody name="head2" imgUrl ="https://picsum.photos/200/ " para ="para2 text" />
    <PageBody name="head3" imgUrl ="https://picsum.photos/200" para ="para3 text" />
    <PageBody name="head4" imgUrl ="https://picsum.photos/200/ " para ="para4 text" />
    <Footer/>
    </div>
  );
}

export default App;
