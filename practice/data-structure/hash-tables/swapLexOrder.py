def solution(str, pairs):
    s = list(str)
    comps = getComps(pairs)
    for comp in comps:
        indices = sorted(list(comp))
        lexIndices = sorted(list(comp), key=lambda i: str[i-1])
        for i in indices:
            s[i-1] = str[lexIndices.pop()-1]
    return ''.join(s);

def getComps(pairs):
    pairs = list(map(set,pairs))
    comps = []
    for pair in pairs:
        newComps = []
        cur = pair.copy()
        for comp in comps:
            if pair & comp:
                cur.update(comp)
            else:
                newComps.append(comp)
        newComps.append(cur)
        comps = newComps
    return comps