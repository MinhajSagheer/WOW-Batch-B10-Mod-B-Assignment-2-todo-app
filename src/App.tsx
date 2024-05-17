import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [txt, setTxt] = useState('');
  const [txtList, setTxtList] = useState<any>([]);

  const del = (i: any) => {
    txtList.splice(i, 1)
    setTxtList([...txtList]);
  }

  const edit = (i: any) => {
    let b = prompt("Enter New Text");
    txtList[i] = b;
    setTxtList([...txtList]);
  }

  const delall = () => {
    setTxtList([]);
  }
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h1 className="text-center">TODO LIST</h1>
            </div>
            <div className="card-body">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a todo"
                  value={txt} 
                  onChange={(e) => {
                    setTxt(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => {
                      txtList.push(txt);
                      setTxtList([...txtList]);
                      setTxt(''); 
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
              {txtList.map((x: any, i: any) => (
                <div key={i} className="todo-item">
                  <p>{x}</p>
                  <div>
                    <button
                      className="btn btn-danger btn-sm mr-2"
                      onClick={() => del(i)} 
                    >
                      Remove
                    </button>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => edit(i)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}

              <button
                className="btn btn-danger btn-sm float-right mt-3"
                onClick={() => delall()}
              >
                Delete All
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
