import Read from '../Components/Read/Read'


const TopicOne = ({IsShow,
    handleShow,
    handleClose}) => {
    return (
        <main>
            <Read IsShow={IsShow}  handleShow={handleShow} handleClose={handleClose}/>
        </main>
    )
}

export default TopicOne