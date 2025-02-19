def isCrossing(paths):
    dirs = {
        "N": [0, 1],
        "E": [1, 0],
        "S": [0, -1],
        "W": [-1, 0],
    }
    
    visit = set()
    x, y = 0, 0
    
    for p in paths:
        visit.add((x,y))
        dx, dy = dirs[p.upper()]
        x, y = x + dx, y + dy
        if (x, y) in visit:
            return True
    return False

print(isCrossing("news"))