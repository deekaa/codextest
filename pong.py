import pygame

WIDTH, HEIGHT = 800, 500
PADDLE_W, PADDLE_H = 12, 90
BALL_SIZE = 12
PADDLE_SPEED = 6
AI_SPEED = 4
BALL_SPEED = 5


def reset_ball():
    return pygame.Rect(WIDTH // 2 - BALL_SIZE // 2, HEIGHT // 2 - BALL_SIZE // 2, BALL_SIZE, BALL_SIZE), [BALL_SPEED, BALL_SPEED]


def main():
    pygame.init()
    screen = pygame.display.set_mode((WIDTH, HEIGHT))
    pygame.display.set_caption("Pong")
    clock = pygame.time.Clock()
    font = pygame.font.SysFont(None, 48)

    left = pygame.Rect(30, HEIGHT // 2 - PADDLE_H // 2, PADDLE_W, PADDLE_H)
    right = pygame.Rect(WIDTH - 30 - PADDLE_W, HEIGHT // 2 - PADDLE_H // 2, PADDLE_W, PADDLE_H)
    ball, vel = reset_ball()
    score_l = 0
    score_r = 0

    running = True
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_ESCAPE:
                    running = False
                elif event.key == pygame.K_r:
                    score_l = 0
                    score_r = 0
                    ball, vel = reset_ball()

        keys = pygame.key.get_pressed()
        if keys[pygame.K_w]:
            left.y -= PADDLE_SPEED
        if keys[pygame.K_s]:
            left.y += PADDLE_SPEED
        left.y = max(0, min(HEIGHT - PADDLE_H, left.y))

        # Simple AI
        if ball.centery < right.centery:
            right.y -= AI_SPEED
        elif ball.centery > right.centery:
            right.y += AI_SPEED
        right.y = max(0, min(HEIGHT - PADDLE_H, right.y))

        ball.x += vel[0]
        ball.y += vel[1]

        if ball.top <= 0 or ball.bottom >= HEIGHT:
            vel[1] *= -1

        if ball.colliderect(left) and vel[0] < 0:
            vel[0] *= -1
        if ball.colliderect(right) and vel[0] > 0:
            vel[0] *= -1

        if ball.left <= 0:
            score_r += 1
            ball, vel = reset_ball()
        elif ball.right >= WIDTH:
            score_l += 1
            ball, vel = reset_ball()

        screen.fill((0, 0, 0))
        pygame.draw.rect(screen, (255, 255, 255), left)
        pygame.draw.rect(screen, (255, 255, 255), right)
        pygame.draw.rect(screen, (255, 255, 255), ball)
        score_surf = font.render(f"{score_l}  {score_r}", True, (255, 255, 255))
        screen.blit(score_surf, (WIDTH // 2 - score_surf.get_width() // 2, 20))

        pygame.display.flip()
        clock.tick(60)

    pygame.quit()


if __name__ == "__main__":
    main()
