// SPDX-License-Identifier: MIT OR Apache-2.0
pragma solidity ^0.8.3;

import '@openzeppelin/contracts/security/ReentrancyGuard.sol';
import '@openzeppelin/contracts/utils/Counters.sol';
import 'hardhat/console.sol';

contract TodoList is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _itemIds;
    Counters.Counter private _itemsSold;

    constructor() {}

    struct TodoItem {
        uint256 todoId;
        string title;
        bool finished;
        address payable creator;
        uint256 amount;
        // string createdAt
        // string dueAt
        // address payable[] accountables;
        // bytes32 deadline;
    }

    mapping(uint256 => TodoItem) private idToTodo;

    /*  When time is up send the money a donation or accountable */
    event TodoExpired();
    event TodoCompleted();
    event TodoCreated(uint256 todoId);

    /* create a todo that has an array of accountableAdresses and a deadline to finish */
    function createTodo(string memory title) public payable nonReentrant {
        uint256 itemId = _itemIds.current();
        idToTodo[itemId] = TodoItem(
            itemId,
            title,
            false,
            payable(msg.sender),
            msg.value
        );
        console.log('item id %s', itemId);
        _itemIds.increment();
        emit TodoCreated(itemId);
    }

    function findTodo(uint256 id) public view returns (TodoItem memory) {
        TodoItem memory item = idToTodo[id];
        return item;
    }

    function fetchUnfinishedTodos() public view returns (TodoItem[] memory) {
        uint256 totalItemCount = _itemIds.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        // get item count
        for (uint256 i = 0; i <= totalItemCount; i++) {
            if (
                idToTodo[i].creator == msg.sender &&
                idToTodo[i].finished == false
            ) {
                itemCount += 1;
            }
        }

        TodoItem[] memory items = new TodoItem[](itemCount);
        for (uint256 i = 0; i <= totalItemCount; i++) {
            TodoItem memory item = idToTodo[i];
            if (item.creator == msg.sender && item.finished == false) {
                uint256 currentId = idToTodo[i].todoId;
                TodoItem memory currentItem = idToTodo[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    function completeTodo(uint256 todoId) public payable {
        uint256 totalItemCount = _itemIds.current();
        for (uint256 i = 0; i <= totalItemCount; i++) {
            if (idToTodo[i].todoId == todoId) {
                require(
                    msg.sender == idToTodo[i].creator,
                    'sender is not creator'
                );
                require(
                    idToTodo[i].finished == false,
                    'todo is already marked as finshed'
                );
                idToTodo[i].finished = true;
                payable(msg.sender).transfer(idToTodo[i].amount);
                console.log('%i amount sent', idToTodo[i].amount);
                emit TodoCompleted();
                break;
            }
        }
    }
}
