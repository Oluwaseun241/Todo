function Form () {
    return(
        <div className='form'>
            <form>
                <input type='text' placeholder='Create a new todo...' />
                <div className="add-task-btn">
                    <button type='submit' className="add-btn"><img src="add.png" className="add-icon" alt="" /></button>
                </div>
            </form>

            <div className="task-list">
                <div className="tasks">
                    
                    {/* Task 1*/}
                    <div className="task">
                        <label htmlFor="task-1">
                            <input 
                                type="checkbox" 
                                id="task-1" 
                            />
                            <span className="custom-checkbox">
                            </span>
                            Daily Drill With Joshua Selman
                        </label>
                        <div className="action">
                            <button className="edit">Edit</button>
                        </div>
                    </div>

                    {/* Task 2 */}
                    <div className="task">
                        <label htmlFor="task-2">
                            <input 
                                type="checkbox" 
                                id="task-2" 
                            />
                            <span className="custom-checkbox">
                            </span>
                            Play Ball Till Dawn Selman
                        </label>
                        <div className="action">
                            <button className="edit">Edit</button>
                        </div>
                    </div>

                    {/* Task 3 */}
                    <div className="task">
                        <label htmlFor="task-3">
                            <input 
                                type="checkbox" 
                                id="task-3" 
                            />
                            <span className="custom-checkbox">
                            </span>
                            What's Going On There?
                        </label>
                        <div className="action">
                            <button className="edit">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="more-opt">
                <span className="items">3 items</span>
                <span className="clear">Clear Complete</span>
            </div>
        </div>
    )
}
export default Form;