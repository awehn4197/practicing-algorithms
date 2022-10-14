import java.util.*;

public class UnionFind {
    public int[] group;
    public int[] rank;
    
    public UnionFind(int size) {
        group = new int[size];
        rank = new int[size];
        for (int i = 0; i < size; i++) {
            group[i] = i;
            rank[i] = 1;
        }
    }
    
    public int find(int node) {
        if (group[node] != node) {
            group[node] = find(group[node]);
        }
        return group[node];
    }
    
    public boolean union(int node1, int node2) {
        int group1 = find(node1);
        int group2 = find(node2);
        
        if (group1 == group2) {
            return false;
        }
        
        if (rank[group1] > rank[group2]) {
            group[group2] = group1;
        } else if (rank[group1] < rank[group2]) {
            group[group1] = group2;
        } else {
            group[group2] = group1;
            rank[group1] += 1;
        }
        
        return true;
    }
}

class Solution {
    

    
    public int minCostConnectPoints(int[][] points) {
        
        ArrayList<int[]> allEdges = new ArrayList<>();
        int numberOfNodes = points.length;
        
        for (int i = 0; i < numberOfNodes; i++) {
            for (int j = 0; j < numberOfNodes; j++) {
                if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
                    continue;
                } else {
                    int distance = Math.abs(points[i][0] - points[j][0]) +  Math.abs(points[i][1] - points[j][1]);
                    int[] newEdge = { distance, i, j };
                    allEdges.add(newEdge);
                }
            }
        }
        
        Collections.sort(allEdges, (a, b) -> Integer.compare(a[0], b[0]));
        
        UnionFind uf = new UnionFind(numberOfNodes);
        
        int mstCost = 0;
        int edgesUsed = 0;
        
        for (int i = 0; i < allEdges.size() && edgesUsed < numberOfNodes - 1; i++) {
            int node1 = allEdges.get(i)[1];
            int node2 = allEdges.get(i)[2];
            int weight = allEdges.get(i)[0];
            
            // System.out.println("node1: "+node1+", node2: "+node2+", weight: "+weight);
            
            if (uf.union(node1, node2)) {
                mstCost += weight;
                edgesUsed++;
            }
        }
        
        return mstCost;
    }
}