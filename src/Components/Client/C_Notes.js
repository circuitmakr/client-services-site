import "./C_Notes.css"
function Notes(){
    return(
        <div>
        <label for='lst_providers' className='lst_label'><h3>Recipient:  </h3></label>
        <select className='lst_providers' name ='lst_providers'>
            <option value ="provider 1">Provider 1</option>
            <option value ="provider 2">Provider 2</option>
            <option value ="provider 3">Provider 3</option>
            <option value ="provider 4">Provider 4</option>
        </select>

        </div>
    )
}
export default Notes;