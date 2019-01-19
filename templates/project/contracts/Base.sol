pragma solidity 0.5.0;


/**
 * @title An amazing project called _project_placeholder_
 * @dev This contract is the base of our project
 */
contract _project_placeholder_ {
    uint256 private number;

    /**
     * @dev Sets the number
     * @param newNumber The new number to store
     */
    function setNumber(uint256 newNumber) external {
        number = newNumber;
    }

    /**
     * @dev Gets the stored number
     * @return The number as an uint
     */
    function getNumber() external view returns (uint256) {
        return number;
    }
}
