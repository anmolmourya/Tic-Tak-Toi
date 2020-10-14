const winner = (squares)=>{
    console.log(squares);
    if(squares[0] === squares[1] && squares[1] === squares[2])
       return squares[0];
    else if(squares[3] === squares[4] && squares[4] === squares[5])
        return squares[3];
    else if(squares[6] === squares[7] && squares[7] === squares[8])
        return squares[6];
    else if(squares[0] === squares[3] && squares[3] === squares[6])
        return squares[0];
    else if(squares[1] === squares[4] && squares[4] === squares[7])
        return squares[1];
    else if(squares[2] === squares[5] && squares[5] === squares[8])
     return squares[2];
    else if(squares[0] === squares[4] && squares[4] === squares[8])
        return squares[0];
    else if(squares[2] === squares[4] && squares[4] === squares[6])
        return squares[2];
    else return null;
}
export default winner