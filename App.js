import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'; // এই লাইন না থাকলে দিয়ে নিতে হবে নইলে useState() ফাংশন কাজ করবে না।

function App() {
  {/* Module => 32-9 */}
  const nayoks = ['salman', 'sakib', 'jit', 'dynamic'];
  {/* Module => 32-8 */}
  const products = [
    {productName : 'Laptop', productPrice : '500$'},
    {productName : 'Mobile', productPrice : '100$'},
    {productName : 'Desktop', productPrice : '550$'},
    {productName : 'Tab', productPrice : '199$'}
  ]// array of object সর্বদা return() এর বাইরে লিখতে হবে

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
{/* ======================================================================================================================= */}

{/* ======================================================================================================================= */}
        {/* Module => 32-12 */}
        <fieldset>
          <legend>Module 32-12</legend>
          <h3>Load Data using useEffect()</h3>
          <LoadData></LoadData>
        </fieldset>
{/* ======================================================================================================================= */}
        {/* Module => 32-10,11 */}
        <fieldset>
          <legend>Module 32-10,11</legend>
          <h3>State Component/React Hook</h3>
          <StateCounter></StateCounter>
        </fieldset>
{/* ======================================================================================================================= */}
        {/* [Module => 32-9 array of objects থেকে multiple dynamic component তৈরি] */}
        <fieldset>
          <legend>Module 32-9</legend>
          <h4>Dynamic Component</h4>
          <ul>
            {// dynamic এত ভিতরে dynamic করা যায়। এখানে dynamic এর মধ্যে dynamic করা হয়েছে।
              nayoks.map (nayok => <li>{nayok}</li>) // এটা dynamic component. data add করলে বা remove করলে এই component automatically update হবে।
            }
            {
              products.map(product => <li>This is <span style = {{color:'red'}}>{product.productName}</span> & its price is {product.productPrice}</li>)
            }
          </ul>
          {/* dynamic component */}
          {
            products.map(dynamicComponent => <SendObjectInCompononent productDetails={dynamicComponent} ></SendObjectInCompononent>)
          }

        </fieldset>
{/* ======================================================================================================================= */}
        {/* Module => 32-8 */}
        <fieldset> 
          <legend>Module 32-8</legend>
          {/* object pass in a component system-2,3 */}
          <SendObjectInCompononent productDetails = {products[2]}></SendObjectInCompononent>
          <SendObjectInCompononent productDetails = {products[0]}></SendObjectInCompononent>
          {/* object pass in a component system-1  
          <SendObjectInCompononent name = {products[0].productName} price = {products[0].productPrice}></SendObjectInCompononent>
          <SendObjectInCompononent name = {products[1].productName} price = {products[1].productPrice}></SendObjectInCompononent>
          */}
        </fieldset>
{/* ===================================================================================================================== */}
        {/* Module => 32-7 */}
        <fieldset>
          <legend>Module 32-7</legend>
          <CreateDynamicComponent name = "Abir" id = "5"></CreateDynamicComponent>
          <CreateDynamicComponent name = "Hossain" id = "35"></CreateDynamicComponent>
          <CreateDynamicComponent name = "Anik" id = "15"></CreateDynamicComponent>
        </fieldset>
{/* ===================================================================================================================== */}
        {/* Module => 32-6 */}
        <fieldset>
          <legend>Module 32-6</legend>
          <CreateComponent></CreateComponent>
          <CreateComponent></CreateComponent>
        </fieldset>
{/* ======================================================================================================================= */}
      </header>
    </div>
  );
}
{/* ======================================================================================================================= */}
// [Module => 32-12 load dynamic data useEffect()]
function LoadData(){
  const [users, setUsers] = useState([]);// database থেকে data ১টা বা ১০টা বা অনেকগুলো পেতে পারি যার সংখ্যা অজানা তাই state declare করা হইছে data গুলোকে state এর মধ্যে রাখার জন্য। useState[] এইখানে initial data empty করা হইছে। state_name যা হয় সাধারণত বোঝার সুবিধার্তে ফাংশনের নামটিও ওইটার সাথে মিলিয়ে রাখা হয়। 
  useEffect(() => {//javaScript এর বাইরে থেকে data বা অন্যকিছু collect করাকে বলা হয় effect. বাইরের সার্ভার থেকে data load করার জন্য এই useEffect() ব্যবহার করা হইছে। useEfferct যতবার rendar হবে ততবার call করবে। একটি empty array [] declare করে দিলেই এটি থেমে যাবে।
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then( data => setUsers(data))
  }, [])//useEffect ke thamanor jonno [] use kora hoise.
  return(
    <div>
      <h3>Total Users: {users.length}</h3>
      <ul>
        {
          users.map(userName => <li>Name: {userName.name}</li>)
        }
      </ul>
    </div>
  );
}
{/* ======================================================================================================================= */}
// [Module => 32-10,11 component state hook এবং state set]
function StateCounter(){
  const [count, setCount] = useState(0);
  // এইখানে count হলো state_name এবং setCount হলো ফাংশন। useState হলো state এর initial value
  const handleIncrease = () => setCount(count + 1);
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick = {handleIncrease}>Increase</button>{/* setCount system 1 */}
      <button onClick = {() => setCount(count - 1)}>Decrease</button>{/* setCount system 2 */}
    </div>
    //<button onMouseMove= { () => setCount(count + 1)}>onMouseMove</button>
  );
}
{/* ======================================================================================================================= */}
// [Module => 32-8 component এর মধ্যে দিয়ে object পাঠানো এবং object এ access করা]
function SendObjectInCompononent(props){
  const sendObjectCSS = {
    border: '1px solid red',
    margin: '10px',
    padding: '10px'
  };
  const {productName, productPrice} = props.productDetails;//using destructure
  return(
    <div style = {sendObjectCSS}> 
      {/* object pass in a component system-3 */}
      <h2>Catagory: {productName}</h2>
      <h4>{productPrice}</h4>

      {/* object pass in a component system-2 
      <h2>Catagory: {props.productDetails.productName}</h2>
      <h4>{props.productDetails.productPrice}</h4>
      */}
      {/* object pass in a component system-1 
      <h2>Catagory: {props.name}</h2>
      <h4>{props.price}</h4>
      */}
      <button>Buy Now</button>
    </div>
  );
}
{/* ======================================================================================================================= */}
// [Module => 32-7 component এর মধ্যে দিয়ে dynamic data পাঠানো] 
function CreateDynamicComponent(props){
  // ফাংশন দিয়ে component তৈরি করার সময় ফাংশনের নামের প্রথম অক্ষর capital letter এ লিখতে হবে।
  // props হলো properties এর শর্ট ভার্সন।
  return(
    // return(); শুধু একটি value রির্টান করে। তবে একাধিক value রির্টান করার জন্য value গুলো div এর ভিতরে লিখতে হবে।
    <div>
      <h3>Create Dynamic Component</h3>
      <h4>Student Name: {props.name}</h4>
      <h5>Student Id: {props.id}</h5>
      {/* 
      1. React এ dynamic value read করার জন্য {} সেকেন্ড ব্রাকেট ব্যবহার করা হয়। 
      2. React এ comment করার জন্য {/*...*।} ব্যবহার করা হয়।
      */}
      <p>
        জীবনটা অনেক সুন্দর।
      </p>
    </div>   
  );
}
{/* ======================================================================================================================= */}
// [Module => 32-6 component তৈরি করা এবং CSS style ব্যবহার]
function CreateComponent(){
  // component এ CSS ব্যবহার করার পদ্ধতি-২b
  const styleInComponent ={ 
    // এই styleInComponent variable টি একটি object তাই {} ব্যবহৃত হয়েছে।
    border: '3px solid red', 
    margin: '10px', 
    padding: '15px'
  }
  return(
    // component এ CSS ব্যবহার করার পদ্ধতি-২b
    <div style= {styleInComponent}>
      {/* component এ CSS ব্যবহার করার পদ্ধতি-১ */}
      <h3 style= {{color: 'red', fontSize: '30px'}}>Book => You Can Win</h3>
      {/* 
        এইখানে style এ ডাবল {{}} এর একটি dynamic এর জন্য এবং অপরটি object তৈরি করার জন্য।
      */}
      <h3>Author => Shiv Khera</h3>
    </div>
  );
}
{/* ======================================================================================================================= */}
export default App;
