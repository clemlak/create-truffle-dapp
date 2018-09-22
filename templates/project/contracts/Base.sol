/* We use a fixed version of Solidity */
pragma solidity 0.4.24;


/**
 * @title Base contract for _project_placeholder_
 * @dev Say something here!
 */
contract _project_placeholder_ {
    /* A variable */
    uint public number;

    event Set(uint number);

    /**
     * @dev Sets the number
     * @param newNumber The new number to store
     */
    function setNumber(uint newNumber) external {
        number = newNumber;
        emit Set(newNumber);
    }

    /**
     * @dev Gets the stored number
     * @return The number as an uint
     */
    function getNumber() external view returns (uint) {
        return number;
    }
}
