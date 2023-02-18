export const memberSort = (
    rowA,
    rowB,
    ) => {
    const usernameA = rowA.values.member[0];
    const usernameB = rowB.values.member[0];
    return usernameA < usernameB ? -1 : usernameB > usernameA ? 1 : 0; 
};