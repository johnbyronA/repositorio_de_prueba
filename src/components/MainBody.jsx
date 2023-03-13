import "./MainBody.css"
import Button from "../ReusableComponents/Button"
import "./ButtonWrapper.css"

const MainBody = () => {
  return (
    <div> 
        <div className="main_body">
            <h1 className="front_title">FRONT</h1>
            <h3 className="reverse_title">REVERSE</h3>
        </div>
        <div className='buttonses'>
                <Button className="button"> Previous </Button > 
                <Button className="button"> I don't know </Button > 
                <Button className="button"> I know </Button > 
                <Button className="button"> Next </Button > 
        </div>
    </div>
  )
}

export default MainBody
