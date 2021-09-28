var computeArea = function(A, B, C, D, E, F, G, H) {
     let leftMax = Math.max(A, E);
        const rightMin = Math.min(C, G);
        const upMin = Math.min(D, H);
        const downMax = Math.max(B, F);
        return (C - A) * (D - B) - (rightMin < leftMax ? 0 : rightMin - leftMax) * (upMin < downMax ? 0 : upMin - downMax) + (G - E) * (H - F);
    }
