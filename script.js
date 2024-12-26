// Ambil elemen yang dibutuhkan
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Fungsi untuk menambahkan tugas baru
function addTodo() {
  const task = todoInput.value.trim();
  if (task === '') {
    alert('Tugas tidak boleh kosong!');
    return;
  }

  // Buat elemen tugas baru
  const li = document.createElement('li');
  li.className = 'todo-item';

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Event untuk menandai selesai
  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
  });

  // Teks tugas
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = task;

  // Tombol hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = 'Hapus';

  // Event untuk menghapus tugas
  deleteBtn.addEventListener('click', () => {
    todoList.removeChild(li);
  });

  // Tambahkan elemen ke dalam <li>
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  // Tambahkan <li> ke dalam daftar
  todoList.appendChild(li);

  // Kosongkan input
  todoInput.value = '';
}

// Event listener untuk tombol tambah
addBtn.addEventListener('click', addTodo);

// Event listener untuk input (tekan Enter)
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTodo();
  }
});
