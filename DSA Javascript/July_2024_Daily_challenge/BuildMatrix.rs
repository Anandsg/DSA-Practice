use std::collections::{HashMap, HashSet, VecDeque};

impl Solution {
    pub fn build_matrix(k: i32, row_conditions: Vec<Vec<i32>>, col_conditions: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        fn topological_sort(k: usize, edges: Vec<Vec<i32>>) -> Option<Vec<i32>> {
            let mut in_degree = vec![0; k];
            let mut graph = vec![vec![]; k];
            
            for edge in edges {
                let u = edge[0] as usize - 1;
                let v = edge[1] as usize - 1;
                graph[u].push(v);
                in_degree[v] += 1;
            }
            
            let mut queue = VecDeque::new();
            for i in 0..k {
                if in_degree[i] == 0 {
                    queue.push_back(i as i32 + 1);
                }
            }
            
            let mut order = Vec::new();
            while let Some(node) = queue.pop_front() {
                order.push(node);
                for &neighbor in &graph[node as usize - 1] {
                    in_degree[neighbor] -= 1;
                    if in_degree[neighbor] == 0 {
                        queue.push_back(neighbor as i32 + 1);
                    }
                }
            }
            
            if order.len() == k {
                Some(order)
            } else {
                None
            }
        }
        
        let row_order = topological_sort(k as usize, row_conditions);
        let col_order = topological_sort(k as usize, col_conditions);
        
        if row_order.is_none() || col_order.is_none() {
            return vec![];
        }
        
        let row_order = row_order.unwrap();
        let col_order = col_order.unwrap();
        
        let mut row_pos = HashMap::new();
        let mut col_pos = HashMap::new();
        
        for (i, &num) in row_order.iter().enumerate() {
            row_pos.insert(num, i);
        }
        
        for (i, &num) in col_order.iter().enumerate() {
            col_pos.insert(num, i);
        }
        
        let mut matrix = vec![vec![0; k as usize]; k as usize];
        for num in 1..=k {
            let r = *row_pos.get(&num).unwrap();
            let c = *col_pos.get(&num).unwrap();
            matrix[r][c] = num;
        }
        
        matrix
    }
}
