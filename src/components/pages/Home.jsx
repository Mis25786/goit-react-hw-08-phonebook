import img from '../../img/phonebook.jpg';

const Home = () => {
  return (
    <ul>
      <h3>Welcome to our website</h3>
      <h4>Here you can create your contact book</h4>
      <h4>To do this, you need to register or log in to your account</h4>
      <img src={img} alt="phonebook" />
    </ul>
  );
};

export default Home;
