def solution(n):
    # This helped with deriving it:
    # How many ways can we fill the n-th column?
    # Make a tree where, at each step, we place a block horizontally or vertically
    # at the topmost empty position in the n-th column.
    # Find all the "leaves". The recurrence is:
    # f[n] = sum of the leaves
    # The subproblems blocks are the remaining shapes in each leaf.
    # To get their recurrence equation, make a tree using the same method...

    # starts at n = [1,2]
    f = [1, 5]  # of ways to tile 4xn rectangle

    # subproblems
    a = [1, 2]  # of ways to tile with top/bottom two squares of column n removed
    # example of n = 4
    # ooox
    # ooox
    # oooo
    # oooo
    b = [1, 1]  # top and bottom squares of column n removed
    # example
    # ooox
    # oooo
    # oooo
    # ooox
    # g1 = [1, 2]
    # g2 = [0, 1]

    for _ in range(3,n+1):

        an = f[-1] + a[-1]
        bn = f[-1] + b[-2]

        fn = f[-2] + f[-1] + 2*a[-1] + b[-1]

        f += [fn]
        a += [an]
        b += [bn]

    return f[n-1]