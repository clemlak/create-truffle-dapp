/* We use a fixed version of Solidity */
pragma solidity 0.4.24;


/**
 * @title Base contract for _project_placeholder_
 * @notice Say something!
 * @dev Any additional information
 */
contract _project_placeholder_ {
    /* A variable */
    uint public number;

    /**
     * @dev Sets the number
     * @param newNumber The new number to be stored
     */
    function setNumber(uint newNumber) public {
        number = newNumber;
    }

    /**
     * @dev Returns the stored number
     * @return The number as an uint
     */
    function getNumber() public constant {
        return number;
    }
}
