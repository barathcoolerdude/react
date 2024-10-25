// const element = <h1 classsName="header">this is jsx</h1>
// console.log(element);

// ReactDOM.render(
//     <div>
//     element
//     <p>this is a paragraph</p>
//     </div>
//     , document.getElementById("root"));

// const h1 = document.createElement("h1");
// h1.textContent = "this is an imperative way to program";
// h1.className = "header";
// document.getElementById("root").append(h1)

const navbar = (
    <nav>
        <h1>Bob's bistro</h1>
        <ul>
            <li>menu</li>       
            <li>history</li>       
            <li>list</li>       
        </ul>
    </nav>
)

ReactDOM.render(navbar , document.getElementById("root"))