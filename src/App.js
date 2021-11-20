import { Button, IconButton } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import {
  RiDragMove2Fill,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiDeleteBinLine,
} from "react-icons/ri";
import {
  MdOutlineFileUpload,
  MdOutlineFileDownload,
  MdOutlineAdd,
} from "react-icons/md";

function App() {
  const [focus, setFocus] = useState(0);
  const [data, setData] = useState([{ title: "", depth: 0 }]);
  const lastRef = useRef(null);

  useEffect(() => {
    if (lastRef.current) lastRef.current.focus();
  }, [focus]);

  const treeify = (data, depth = 0) => {
    const tree = [];
    console.log({ data, tree, depth });
    for (let i = 0; i < data.length; i++) {
      if (data[i].depth === depth) {
        data[i].childs = treeify(
          data.slice(i, part(data, i, depth)),
          depth + 1
        );
        tree.push(data[i]);
      }
    }
    return tree;
  };

  const datafy = (tree) => {
    const data = [];
    console.log({ data, tree });
    for (let i = 0; i < tree.length; i++) {
      data.push({ title: tree[i].title, depth: tree[i].depth });
      data.push(...datafy(tree[i].childs));
    }
    return data;
  };

  const showFile = async (e) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const text = e.target.result;
      setData(datafy(JSON.parse(text)));
    };
    reader.readAsText(e.target.files[0]);
  };

  const part = (d, i, depth) => {
    let p = i + 1;
    for (let j = i + 1; j < d.length; j++) {
      if (d[j].depth <= depth) break;
      p = j + 1;
    }
    return p;
  };

  return (
    <div
      style={{
        width: "80%",
        margin: "50px auto",
      }}
    >
      <div
        style={{
          borderBottom: "2px solid #eee",
          display: "flex",
        }}
      >
        <textarea
          rows="1"
          defaultValue={"Mathematics"}
          style={{
            fontSize: 30,
            fontWeight: "bold",
            fontFamily: "Monospace",
            alignItems: "center",
            color: "#ccc",
            resizable: "none",
          }}
        />
      </div>
      {data.map(({ title, depth }, i) => (
        <div
          draggable
          onDragStart={() => {
            console.log("hi");
          }}
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            borderBottom: "2px solid #eee",
          }}
        >
          <div>
            <IconButton onClick={() => {}}>
              <RiDragMove2Fill />
            </IconButton>
            <IconButton
              onClick={() => {
                if (i !== 0 && depth > 0) {
                  setData((prev) =>
                    prev.map((e, j) =>
                      j >= i && j < part(prev, i, depth)
                        ? { ...e, depth: e.depth - 1 }
                        : e
                    )
                  );
                }
              }}
            >
              <RiArrowLeftLine />
            </IconButton>
            <IconButton
              onClick={() => {
                if (i !== 0 && depth <= data[i - 1].depth) {
                  setData((prev) =>
                    prev.map((el, j) =>
                      i === j ? { ...el, depth: el.depth + 1 } : el
                    )
                  );
                }
              }}
            >
              <RiArrowRightLine />
            </IconButton>
            <IconButton
              onClick={() =>
                setData((prev) =>
                  prev.filter((e, j) => j < i || j >= part(prev, i, depth))
                )
              }
            >
              <RiDeleteBinLine />
            </IconButton>
          </div>
          <div
            style={{
              height: 56,
              width: 40,
              backgroundColor: "#fafafa",
              marginLeft: 15 + depth * 18,
              marginRight: 15,
            }}
          />
          <textarea
            rows="1"
            ref={i === focus ? lastRef : null}
            value={title}
            style={{
              opacity: 1 - depth * 0.1,
              fontSize: 26 - depth * 2.5,
            }}
            onChange={({ target: { value } }) => {
              const lines = value.split("\n");
              value = lines[0];
              let newData = data.map((el, j) =>
                i === j ? { ...el, title: value } : el
              );
              if (lines.length > 1) {
                const newNode = { title: lines[1], depth: data[i].depth };
                newData = [
                  ...newData.slice(0, i + 1),
                  newNode,
                  ...newData.slice(i + 1),
                ];
                setFocus(i + 1);
              }
              setData(newData);
            }}
          />
        </div>
      ))}
      <div style={{ display: "flex" }}>
        <Button
          variant="contained"
          style={{ flex: 1, margin: 5 }}
          onClick={() => {
            setData((prev) => [
              ...prev,
              { title: "", depth: prev[prev.length - 1].depth ?? 0 },
            ]);
          }}
        >
          <MdOutlineAdd style={{ width: 40, height: 20 }} />
          Add
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          style={{ flex: 1, margin: 5 }}
          variant="outlined"
          onClick={() => {
            const element = document.createElement("a");
            const textFile = new Blob([[JSON.stringify(treeify(data))]]);
            element.href = URL.createObjectURL(textFile);
            element.download = "userFile.json";
            document.body.appendChild(element);
            element.click();
          }}
        >
          <MdOutlineFileDownload style={{ width: 40, height: 20 }} />
          Save
        </Button>
        <label style={{ flex: 1, margin: 5 }} htmlFor="button-file">
          <input
            style={{ display: "none" }}
            accept="application/JSON"
            onChange={showFile}
            id="button-file"
            multiple
            type="file"
          />
          <Button variant="outlined" style={{ width: "100%" }}>
            <MdOutlineFileUpload style={{ width: 40, height: 20 }} />
            Load
          </Button>
        </label>
      </div>
    </div>
  );
}

export default App;
