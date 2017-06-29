import ConfusionMatrix from '..';

var diagonal = {
    matrix: [[2, 0, 0], [0, 3, 0], [0, 0, 1]],
    labels: [0, 1, 2]
};

var full = {
    matrix: [[3, 4], [1, 7]],
    labels: [0, 1]
};

describe('Confusion Matrix', function () {
    it('trivial', function () {
        const CM = new ConfusionMatrix(diagonal.matrix, diagonal.labels);
        expect(CM.matrix).toBe(diagonal.matrix);
        expect(CM.labels).toBe(diagonal.labels);
    });


    it('diagonal', function () {
        const CM = new ConfusionMatrix(diagonal.matrix, diagonal.labels);
        expect(CM.accuracy).toBe(1);
        expect(CM.nbPredicted).toBe(6);
    });

    it('full', function () {
        const CM = new ConfusionMatrix(full.matrix, full.labels);
        expect(CM.accuracy).toBe(10 / 15);
        expect(CM.nbPredicted).toBe(15);
    });

    it('should throw when matrix and labels do not have the same length', function () {
        expect(function () {
            new ConfusionMatrix([[1]], [1, 2]);
        }).toThrowError(/matrix and labels should have the same length/);
    });

    it('should throw when the given matrix is not square', function () {
        expect(function () {
            new ConfusionMatrix([[1, 2]], []);
        }).toThrowError(/matrix must be square/);
    });
});

