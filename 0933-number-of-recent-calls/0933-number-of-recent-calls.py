from collections import deque
class RecentCounter(object):

    def __init__(self):
        self.recent_requests = deque()

    def ping(self, t):
        while self.recent_requests and self.recent_requests[0] < t-3000:
            self.recent_requests.popleft()
        self.recent_requests.append(t)
        return len(self.recent_requests)
        """
        :type t: int
        :rtype: int
        """
        


# Your RecentCounter object will be instantiated and called as such:
# obj = RecentCounter()
# param_1 = obj.ping(t)