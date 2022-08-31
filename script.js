const addBtn = document.querySelector('.add')

addBtn.addEventListener('click', () => addNewNote())

function addNewNote(text = '') {
  const note = document.createElement('div')
  note.classList.add('note')

  note.innerHTML = `
    <div class="tools">
      <button class="edit"  title="Edit">
        <i class="fa-solid fa-pen-to-square"></i>        
      </button>

      <button class="delete" title="Delete">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>

    <div class="main" ${text ? '' : 'hidden'}></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `
  document.body.appendChild(note)

  const editBtn = document.querySelector('.edit')
  const deleteBtn = document.querySelector('.delete')
  const main = document.querySelector('.main')
  const textArea = document.querySelector('textarea')

  deleteBtn.addEventListener('click', () => {
    note.remove()
  })


  
}
