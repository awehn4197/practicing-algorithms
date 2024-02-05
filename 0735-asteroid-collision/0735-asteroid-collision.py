class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []
        for asteroid in asteroids:
            # print(f'asteroid: {asteroid}')
            if asteroid > 0:
                # print(f'gt0')
                stack.append(asteroid)
            else:
                # print(f'lt0')
                while stack and stack[-1] > 0:
                    colliding_asteroid = stack[-1]
                    # print(f'colliding {colliding_asteroid} with {asteroid}')
                    # the asteroid at the top of the stack is smaller than the current asteroid
                    # so the new asteroid destroys the old one and (should) replace it
                    if colliding_asteroid < (-1)*asteroid:
                        stack.pop()
                    # the asteroids are the same size, collide and destroy each other
                    elif colliding_asteroid == (-1)*asteroid:
                        stack.pop()
                        asteroid = None
                        break
                    else:
                        asteroid = None
                        break
                # print('after the while loop')
                if asteroid:
                    stack.append(asteroid)
        return stack