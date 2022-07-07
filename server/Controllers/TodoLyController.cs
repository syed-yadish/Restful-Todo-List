using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HackDay.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoLyController : ControllerBase
    {
        private readonly TodoLyContext _context;

        public TodoLyController(TodoLyContext context)
        {
            _context = context;
        }

        // GET: api/TodoLy
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoLy>>> GetTodoLy()
        {
          if (_context.TodoLy == null)
          {
              return NotFound();
          }
            return await _context.TodoLy.ToListAsync();
        }

        // GET: api/TodoLy/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TodoLy>> GetTodoLy(int id)
        {
          if (_context.TodoLy == null)
          {
              return NotFound();
          }
            var todoLy = await _context.TodoLy.FindAsync(id);

            if (todoLy == null)
            {
                return NotFound();
            }

            return todoLy;
        }

        // PUT: api/TodoLy/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoLy(int id, TodoLy todoLy)
        {
            if (id != todoLy.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoLy).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoLyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/TodoLy
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<TodoLy>> PostTodoLy(TodoLy todoLy)
        {
          if (_context.TodoLy == null)
          {
              return Problem("Entity set 'TodoLyContext.TodoLy'  is null.");
          }
            _context.TodoLy.Add(todoLy);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTodoLy", new { id = todoLy.Id }, todoLy);
        }

        // DELETE: api/TodoLy/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoLy(int id)
        {
            if (_context.TodoLy == null)
            {
                return NotFound();
            }
            var todoLy = await _context.TodoLy.FindAsync(id);
            if (todoLy == null)
            {
                return NotFound();
            }

            _context.TodoLy.Remove(todoLy);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoLyExists(int id)
        {
            return (_context.TodoLy?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
