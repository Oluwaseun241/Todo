function Form () {
    return(
        <div className='form'>
            <form>
                <input type='text' placeholder='Create New Todo' />
                <button type='submit'>Add Todo</button>
            </form>
            <div>
                <span>Wash the car</span>
                <button type='button'>Edit</button>
                <br />
                <span>Morning jogging</span>
                <button type='button'>Edit</button>
            </div>

        </div>
    )
}
export default Form;