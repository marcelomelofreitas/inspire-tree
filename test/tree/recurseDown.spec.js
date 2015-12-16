'use strict';

describe('Tree.recurseDown', function() {
    var $tree;
    var tree;

    before(function() {
        helpers.createTreeContainer();

        // Query DOM
        $tree = $('.tree');

        // Create tree
        tree = new InspireTree({
            target: $tree,
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA',
                    id: 2,
                    children: [{
                        text: 'AAA',
                        id: 3
                    }]
                }]
            }, {
                text: 'B'
            }]
        });
    });

    it('exists', function() {
        expect(tree.recurseDown).to.be.a('function');
    });

    it('recurse down node and children', function() {
        var count = 0;

        tree.recurseDown(tree.node(1), function(node) {
            count++;
            return node;
        });

        expect(count).to.equal(3);
    });

    it('recurse down treenodes and children', function() {
        var count = 0;

        tree.recurseDown(tree.nodes(), function(node) {
            count++;
            return node;
        });

        expect(count).to.equal(4);
    });

    after(helpers.clearDOM);
});
