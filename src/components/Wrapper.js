import ButtonBox from "./ButtonBox";
import HeaderScreen from "./HeaderScreen"; 

const Wrapper = () => {  
    
  return ( 
      <div className="card text-bg-light mb-3" style={{ "maxWidth": " 35rem" }}>
        <div className="card-header">
          <h2 className="text-center">Reto calculadora v1</h2>
          <HeaderScreen />
        </div>
        <div className="card-body text-bg-dark">
          <ButtonBox />
        </div>
      </div> 
  );
};

export default Wrapper;
