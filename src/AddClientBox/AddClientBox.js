import './AddClientBox.css';

const AddClientBox = () => {
    return ( 
        <div className="box">
            <div className="container">
                <div className="grid-item-1">
                    <div>Name: <input type="text" className="textbox" /></div>
                    <div>Email: <input type="text" className="textbox" /></div>
                </div>

                <div className="information">
                    Information: <input type="text" className="textbox" />
                </div>

                <div className="buttondiv">
                    <button type="button">Upload Files</button>
                    <button type="button">Add Content</button>
                </div>
            </div>
        </div>
     );
}
 
export default AddClientBox;