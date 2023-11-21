def canUnlockAll(boxes):
    """Who locked the bokzez"""
    List = [boxes[0]]
    for box in boxes:
        if len(box) == 0:
            List.append(box)
        for num in box:
            if boxes[num]: #key unlocks a box
                if not boxes[num] in List:
                    List.append(boxes[num])
    print(List,"\n",boxes)
    return len(List) == len(boxes)

boxes = [[1], [2], [3], [4], []]
print(canUnlockAll(boxes))

boxes = [[1, 4, 6], [2], [0, 4, 1], [5, 6, 2], [3], [4, 1], [6]]
print(canUnlockAll(boxes))

boxes = [[1, 4], [2], [0, 4, 1], [3], [], [4, 1], [5, 6]]
print(canUnlockAll(boxes))
