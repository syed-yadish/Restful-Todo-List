using Microsoft.EntityFrameworkCore;
using HackDay.Models;
public static class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new TodoLyContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<TodoLyContext>>()))
        {
                // Look for any movies.
            if (context.TodoLy.Any()) { return; }

            context.TodoLy.AddRange(
                new TodoLy
                {
                    Id = 1,
                    Task = "Get this done!"
                },
                new TodoLy
                {
                    Id = 2,
                    Task = "Mission Impossible!"
                }
             
            // and more
            );
            context.SaveChanges();
        }
    }
}