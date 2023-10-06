import Dash from "./Dash";
import Tile from "./Tile";
import "./Board.css";

function  Board({tiles, onTileClick, playerTurn, strikeClass}) {
    return ( 
        <div className="board">
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(0)}  value={tiles[0]} className="top-border left-border right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(1)}  value={tiles[1]} className="top-border left-border right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(2)}  value={tiles[2]} className="top-border left-border  right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(3)}  value={tiles[3]} className="top-border left-border  right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(4)}  value={tiles[4]} className="top-border left-border  right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(5)}  value={tiles[5]} className="top-border left-border  right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(6)}  value={tiles[6]} className="top-border left-border  right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(7)}  value={tiles[7]} className="top-border left-border  right-border bottom-border"/>
         <Tile playerTurn={playerTurn} onClick={()=>onTileClick(8)}  value={tiles[8]} className="top-border left-border  right-border bottom-border"/>
         <Dash strikeClass={strikeClass} />
        </div>
     );
}

export default  Board;