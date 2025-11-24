class Grid {
    constructor(rows, cols) {
        this._rows = Number(rows) || 0;
        this._cols = Number(cols) || 0;
        this._size = this._rows * this._cols;
        this._data = new Array(this._size).fill(undefined);
    }

    // helpers
    _inBounds(row, col) {
        return (
            Number.isInteger(row) && Number.isInteger(col) &&
            row >= 0 && row < this._rows &&
            col >= 0 && col < this._cols
        );
    }

    indexFor({ row, col }) {
        if (!this._inBounds(row, col)) return undefined;
        return row * this._cols + col;
    }

    rowColFor(index) {
        if (!Number.isInteger(index) || index < 0 || index >= this._size) return undefined;
        const row = Math.floor(index / this._cols);
        const col = index % this._cols;
        return { row, col };
    }

    get({ row, col }) {
        const idx = this.indexFor({ row, col });
        if (idx === undefined) return undefined;
        return this._data[idx];
    }

    set({ row, col }, value) {
        const idx = this.indexFor({ row, col });
        if (idx === undefined) return; // ignore out-of-bounds
        this._data[idx] = value;
    }

    neighbours({ row, col }) {
        const out = [];
        for (let dr = -1; dr <= 1; dr++) {
            for (let dc = -1; dc <= 1; dc++) {
                if (dr === 0 && dc === 0) continue;
                const r = row + dr;
                const c = col + dc;
                if (this._inBounds(r, c)) out.push({ row: r, col: c });
            }
        }
        return out;
    }

    neighbourValues({ row, col }) {
        return this.neighbours({ row, col }).map(({ row: r, col: c }) => this.get({ row: r, col: c }));
    }

    _cellObj(row, col) {
        if (!this._inBounds(row, col)) return undefined;
        return { row, col, value: this.get({ row, col }) };
    }

    north({ row, col }) { return this._cellObj(row - 1, col); }
    south({ row, col }) { return this._cellObj(row + 1, col); }
    west({ row, col }) { return this._cellObj(row, col - 1); }
    east({ row, col }) { return this._cellObj(row, col + 1); }

    nextInRow({ row, col }) {
        if (!Number.isInteger(row) || !Number.isInteger(col)) return undefined;
        if (col + 1 >= this._cols) return undefined;
        return this._cellObj(row, col + 1);
    }

    nextInCol({ row, col }) {
        if (!Number.isInteger(row) || !Number.isInteger(col)) return undefined;
        if (row + 1 >= this._rows) return undefined;
        return this._cellObj(row + 1, col);
    }

    rows() { return this._rows; }
    cols() { return this._cols; }
    size() { return this._size; }

    fill(value) {
        for (let i = 0; i < this._size; i++) this._data[i] = value;
    }
}

export default Grid;
export { Grid };